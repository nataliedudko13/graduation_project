import { test, expect } from "@playwright/test";
import { PHOTO_URL } from "../../src/consts/common.const";

test.describe("Отправить данные", () => {
  test("Вставить данные в photos", async ({ request }) => {
    const response = await request.post(PHOTO_URL, {
      data: {
        albumId: 123,
        title: "hello",
      },
    });
    expect(response.status()).toBe(201);
    console.log(await response.json());
  });

  test("Отправить данные в раздел albums", async ({ request }) => {
    const response = await request.post(PHOTO_URL, {
      data: {
        userId: 77,
        title: "Vacation",
      },
    });
    expect(response.status()).toBe(201);
    console.log(await response.json());
  });

  test("Отправить данные в раздел users", async ({ request }) => {
    const response = await request.post(PHOTO_URL, {
      data: {
        name: "Vasiliy",
        username: "Vasya",
        email: "Test@test.test",
      },
    });
    expect(response.status()).toBe(201);
    console.log(await response.json());
  });
});
