#! /bin/env node

const fs = require("fs");
const fsPromise = require("fs").promises;

const title = process.argv[2];
const tags = process.argv[3];
const imgAlt = process.argv[4];
const pickMonth = process.argv[5];
const pickDay = process.argv[6];

function formatSlug(title) {
	const regex = /[^a-z0-9 ]/gi;
	return title
		.toLowerCase()
		.replace(regex, "")
		.split(" ")
		.filter(Boolean)
		.join("-");
}

const createBlog = async (
	blogTitle = title,
	tag = tags,
	imageAlt = imgAlt,
	mm = pickMonth,
	dd = pickDay,
) => {
	const year = new Date().getFullYear();
	const month = +mm || new Date().getMonth() + 1;
	const day = +dd || new Date().getDate();

	const currentYear = `${year}`;

	const formatDate = (date) => (date < 9 ? `0${date}` : date);
	const formattedMonth = formatDate(month);
	const formattedDay = formatDate(day);
	const formattedTitle = formatSlug(blogTitle);

	const folderName = `${currentYear}/${formattedMonth}-${formattedDay}-${formattedTitle}`;

	console.log(formattedTitle);

	const content = `---
slug: ${formattedTitle}
title: ${blogTitle}
authors: victoria
tags: [${tag}]
hide_table_of_contents: false
---

![${imageAlt}](./${formatSlug(imageAlt)}.webp)

<!--truncate-->

## Thank you!

Thank you for your time and reading this!
`;

	try {
		process.chdir("./blog");
		if (!fs.existsSync(currentYear)) {
			await fsPromise.mkdir(currentYear);
		}

		if (!fs.existsSync(folderName)) {
			await fsPromise.mkdir(folderName);
		}

		await fsPromise.appendFile(`${folderName}/index.md`, content);
	} catch (error) {
		console.log(error);
	}
};

createBlog();
