import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10,
  duration: "30s",
  ext: {
    loadimpact: {
      // Project: Default project
      projectID: 3688907,
      // Test runs with the same name groups test runs together.
      name: "Test (28/03/2024-22:42:37)"
    }
  }
};

export default function () {
  http.get("https://test.k6.io");
  sleep(1);
}
