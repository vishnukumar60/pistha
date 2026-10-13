import { describe, expect, it } from "vitest";
import { education, skills, profile } from "@/data/portfolio";

describe("Resume facts", () => {
  it("preserves the documented B.Tech duration and CGPA", () => {
    expect(education[0]?.date).toBe("2023–2027");
    expect(education[0]?.result).toBe("8.92");
  });
  it("limits the technical toolkit to the five documented skills", () => {
    expect(skills.map((skill) => skill.name)).toEqual(["Java", "HTML", "CSS", "SQL", "Power BI"]);
  });
  it("preserves the documented contact destinations", () => {
    expect(profile.email).toBe("praveenmurugavel08@gmail.com");
    expect(profile.phone).toBe("+91 8072899133");
    expect(profile.linkedin).toBe("https://www.linkedin.com/in/praveen-m-44748b31a/");
    expect(profile.github).toBe("https://github.com/praveenm0808");
  });
});
