describe("Xpon\s home test", () => {
    it("Getting secondaryItem with dynamic root element", () => {
      cy.fixture("data.json").as("response");
      cy.get("@response").then(res => {
        readSecondaryTermIntoArray(res, "all_article");
      });
    });
  });

  const readSecondaryTermIntoArray = (response, parentItem) => {
    const itemsArr = response.data[parentItem].items;
    const secondaryArr = [];
    itemsArr.forEach(item => {
      const secondaryTerm = item.termSelector.secondaryTerm
      secondaryArr.push(secondaryTerm);
      cy.log(`SecondaryTerm: ${secondaryTerm}`);
    });
    return secondaryArr;
  };
  