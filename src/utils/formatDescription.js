const formatDescription = (description) => {
  let newDescriptionArray = [];

  for(let textElem = 0; textElem < description.length; textElem++) {
    if (textElem !== description.length - 1) {
      newDescriptionArray.push(description[textElem]);
      newDescriptionArray.push("");
    } else {
      newDescriptionArray.push(description[textElem]);
    }
  }

  return newDescriptionArray;
};

export default formatDescription;