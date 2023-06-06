const flattenObject = (obj) => {
  let copy;

  if (obj === null ||  typeof obj !== "object") return obj;

  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
  } else if (obj instanceof Array) {
      copy = [];
      for (var i = 0, len = obj.length; i < len; i++) {
          copy[i] = flattenObject(obj[i]);
      }
  } else if (obj instanceof Object) {
      copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          if (attr === 'fields') {
            Object.assign(copy, flattenObject(obj[attr]));
          } else {
            copy[attr] = flattenObject(obj[attr]);
          }
        }
      }
  } else {
    throw new Error("flattenObject: Unsupported type.");
  }

  return copy;
}

export default flattenObject
