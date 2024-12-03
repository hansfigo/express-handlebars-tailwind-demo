# Hello Anak BEK EN

ini gambaran implementasi Silabus BE AMCC 2024

<div align="center">
<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img1.picmix.com/output/pic/normal/2/3/1/0/11750132_00f1b.gif">
    <img alt="Taipy" src="https://c.tenor.com/oifgBY6atjsAAAAC/tenor.gif" width="600" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://media.tenor.com/ZxoQaz0VvQIAAAAM/marcille-best-girl-failure.gif">
    <img alt="Taipy" src="https://c.tenor.com/oifgBY6atjsAAAAC/tenor.gif" width="600" />
  </picture>
</div>

### How to run

1. `npm i` or `bun i`
2. create database klean
3. trus buat `.env` dari `.env example`
4. sesuai kan file env dngn database klean
5. untuk migrate jalankan `npm run migrate`
6. running app `npm run dev`
7. yeyy hrusnya express app kita jalan

### Library/Tools Used

- Express
- Handlebars ( Template Engine )
- Tailwind CSS
- Prisma ORM
- Joi Validation

### Migration Guide

- edit `/prisma/schema.prsma`
- run `npm run generate`
- finally `npm run migrate`

### Build for prod !!

- `npm run build`
- terakhir untuk mulai servernya `npm run start`
