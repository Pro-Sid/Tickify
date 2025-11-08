import request from "supertest";
import { app } from "../../app";

describe("Current user", () => {
  it("responds with details about the current user", async () => {
    const cookie = await global.signin();

    const response = await request(app)
      .get("/api/users/currentuser")
      .set("Cookie", cookie)
      .send()
      .expect(200);

    expect(response.body.currentUser.email).toEqual("test@test.com");
  });

  it("responds with null if not authenticated", async () => {
    const response = await request(app)
      .get("/api/users/currentuser")
      .send()
      .expect(200);

    expect(response.body.currentUser).toEqual(null);
  });

  it("maintains the session after multiple requests", async () => {
    const cookie = await global.signin();

    const firstResponse = await request(app)
      .get("/api/users/currentuser")
      .set("Cookie", cookie)
      .send()
      .expect(200);

    const secondResponse = await request(app)
      .get("/api/users/currentuser")
      .set("Cookie", cookie)
      .send()
      .expect(200);

    expect(firstResponse.body.currentUser).toEqual(
      secondResponse.body.currentUser
    );
  });
});
