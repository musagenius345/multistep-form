
import { create, skip, test, enforce, only, skipWhen, warn, include } from "vest";

const suite = create((data = {}, currentField) => {
  only(currentField);
  include("confirm").when("password");

  test("name", "name is required", () => {
    enforce(data.name).isNotBlank();
  });

  test("name", "name must be at least 3 characters", () => {
    enforce(data.name).longerThan(2);
  });

  test("email", "Email is required", () => {
    enforce(data.email).isNotEmpty();
  });

  test.skip("email", "Email must be at laest 5 chars", () => {
    enforce(data.email).longerThanOrEquals(5);
  });

  test("email", "Invalid Email", () => {
    warn();
    enforce(data.email).isEmail();
  });

  skipWhen(!data.confirm, () => {
    test("confirm", "Passwords do not match", () => {
      enforce(data.password).equals(data.confirm);
    });
  });

  test("tos", () => {
    enforce(data.tos).isTruthy();
  });
});



export default suite;
