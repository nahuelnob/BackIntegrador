const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
const users = require("../src/utils/users");

const { email, password } = users[0];

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status:200", async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await session(app).get("/rickandmorty/character/1");
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("species");
      expect(body).toHaveProperty("gender");
      expect(body).toHaveProperty("status");
      expect(body).toHaveProperty("origin");
      expect(body).toHaveProperty("image");
    });

    it("si hay un error responde con Status:500", async () => {
      id = 1500;
      const response = await agent.get(`/rickandmorty/character/${id}`);
      expect(response.statusCode).toBe(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    const { email, password } = users[0];

    it("Acces : true -> si el email y password son correctos", async () => {
      const { body } = await agent.get(
        `/rickandmorty/login?email=${email}&password=${password}`
      );
      expect(body.access).toBeTruthy();
    });

    it("Acces : false -> si el email es incorrecto", async () => {
      const { body } = await agent.get(
        `/rickandmorty/login?email=${"n" + email}&password=${password}`
      );
      expect(body.access).toBeFalsy();
    });

    it("Acces : false -> si password es incorrecto", async () => {
      const { body } = await agent.get(
        `/rickandmorty/login?email=${email}&password=${"s" + password}`
      );
      expect(body.access).toBeFalsy();
    });

    it("Acces : false -> si el email y password son incorrectos", async () => {
      const { body } = await agent.get(
        `/rickandmorty/login?email=${"s" + email}&password=${"a" + password}`
      );
      expect(body.access).toBeFalsy();
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const charFav = {
      id: 3,
      name: "Summer Smith",
      gender: "Female",
      species: "Human",
    };
    const charFav2 = {
      id: 4,
      name: "Summer Smith",
      gender: "Female",
      species: "Human",
    };
    const charFav3 = {
      id: 5,
      name: "Summer Smith",
      gender: "Female",
      species: "Human",
    };

    it("Lo enviado --> debe ser un array con el personaje enviado", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(charFav);
      expect(Array.isArray(body)).toBeTruthy(); // expect(body).toBeInstanceOf(Array)
      expect(body).toContainEqual(charFav);
    });

    it("Lo enviado --> debe ser un array con el personaje enviado", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(charFav2);
      expect(body).toContainEqual(charFav);
      expect(body).toContainEqual(charFav2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Debe devolver el arreglo sin modificar si no se encuentra el ID", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/13");
      expect(body).toBeInstanceOf(Array);
      expect(body).toEqual([
        {
          id: 3,
          name: "Summer Smith",
          gender: "Female",
          species: "Human",
        },
        {
          id: 4,
          name: "Summer Smith",
          gender: "Female",
          species: "Human",
        },
      ]);
    });
    it("Elimina correctamente el personaje", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/3");
      expect(body).toBeInstanceOf(Array);
      expect(body).toEqual([
        {
          id: 4,
          name: "Summer Smith",
          gender: "Female",
          species: "Human",
        },
      ]);
    });
  });
});
