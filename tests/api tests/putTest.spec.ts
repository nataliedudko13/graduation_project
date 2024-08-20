import { test, expect } from "@playwright/test";
import { POST_URL } from "../../src/consts/common.const";

test.describe("Отправить данные uresId, id", () => {
  test("Вставить данные в photos", async ({ request }) => {
    const response = await request.put(POST_URL, {
      data: {
        userId: 777,
      },
    });
    expect(response.status()).toBe(200);
    console.log(await response.json());
  });

  test("Отправить данные title", async ({ request }) => {
    const response = await request.put(POST_URL, {
      data: {
        title: "Vacation",
      },
    });
    expect(response.status()).toBe(200);
    console.log(await response.json());
  });

  test("Отправить данные body", async ({ request }) => {
    const response = await request.put(POST_URL, {
      data: {
        body: "HELLO! WORLD!",
      },
    });
    expect(response.status()).toBe(200);
    console.log(await response.json());
  });
});
