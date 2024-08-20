import { test, expect } from "@playwright/test";
import { COMMENT_URL, POST_URL, USER_URL } from "../../src/consts/common.const";

test.describe("Получить данные", () => {
  test("Получить данные title раздела posts", async ({ request }) => {
    const response = await request.get(POST_URL);

    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
    console.log(await response.json());
  });

  test("Получить данные  name, email раздел comments у id = 2", async ({
    request,
  }) => {
    const response = await request.get(COMMENT_URL, {
      params: {
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
      },
    });
    expect(response.status()).toBe(200);
    console.log(await response.json());
  });

  test("Получить данные  address, phone раздел users у id = 5", async ({
    request,
  }) => {
    const response = await request.get(USER_URL, {
      params: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",

        phone: "(254)954-1289",
      },
    });
    expect(response.status()).toBe(200);
    console.log(await response.json());
  });
});
