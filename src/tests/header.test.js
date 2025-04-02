// import {chromium} from "playwright";
//
// test("Add Two Numbers",()=>{
//
//     const sum=1+2;
//     expect(sum).toEqual(3)
// })
//
//
// test("Add One Number",async ()=>{
//
//     // TODO Creating a New Browser Instance
//     const browser=await chromium.launch({
//         headless:false,
//     })
//     // TODO Open a new Page
//     const page=await browser.newPage()
// })


// import { test, expect } from '@playwright/test';
//
// test('React app loads correctly', async ({ page }) => {
//     await page.goto('/');
//     await expect(page).toHaveTitle('Vite + React');
//     await expect(page.locator('h1')).toContainText('Hello World');
// });