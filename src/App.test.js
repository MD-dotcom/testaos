import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const puppeteer = require('puppeteer');




const subscribe = async () => {
  const browser = await puppeteer.launch(); 
  const page    = await browser.newPage();

  // Wait until page has loaded

  await page.goto('https://localhost/', {
    waitUntil: 'networkidle0'
  });

  // Wait for log in form

  await Promise.all([
    page.waitForSelector('[name="email"]'),
    page.waitForSelector('[name="password"]'),
    page.waitForSelector('[name="submit"]')
  ]);

  // Enter email and password

  await page.type('[name="email"]', 'email');
  await page.type('[name="password"]', 'password');

  // Submit log in credentials and wait for navigation

  await Promise.all([
    page.click('[type="submit"]'),
    page.waitForNavigation({
      waitUntil: 'networkidle0'
    })
  ]);

  // Download PDF

  await page.pdf({
    path: 'page.pdf',
    format: 'A4'
  });

  await browser.close();
}
subscribe()
