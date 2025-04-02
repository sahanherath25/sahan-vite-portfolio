import { test, expect } from '@playwright/test';

test('Homepage renders', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('My Next.js App');
    await expect(page.getByText('Welcome to Next.js')).toBeVisible();
});