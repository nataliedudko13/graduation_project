import { test, expect } from "@playwright/test";
import { POST_URL } from "../../src/consts/common.const";

test.describe("Удалить данные", () => {
  test("Удалить данные title раздела posts", async ({ request }) => {
    const response = await request.delete(POST_URL);

    expect(response.status()).toBe(200);
  });
});
