const { JSONPath } = require("jsonpath-plus");

describe("Xpons home test", () => {
  beforeEach("Loading json data for testing", () => {
    cy.fixture("data.json").as("response");
  });

  it("Getting secondaryItem with dynamic root element", () => {
    cy.get("@response").then((res) => {
      readSecondaryTermIntoArray(res, "all_article");
    });
  });

  it("Getting secondaryItem with dynamic json structure using JSonPath", () => {
    cy.get("@response").then((res) => {
      const secondaryArr = JSONPath({ path: "$..secondaryTerm", json: res });
      secondaryArr.forEach((term) => {
        cy.log(term);
      });
    });
  });
});

const readSecondaryTermIntoArray = (response, parentItem) => {
  const itemsArr = response.data[parentItem].items;
  const secondaryArr = [];
  itemsArr.forEach((item) => {
    const secondaryTerm = item.termSelector.secondaryTerm;
    secondaryArr.push(secondaryTerm);
    cy.log(`SecondaryTerm: ${secondaryTerm}`);
  });
  return secondaryArr;
};
