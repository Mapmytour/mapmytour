export const getPackageName = (name: string) => {
  if (name?.toLowerCase?.()?.includes?.("tour packages")) {
    name = name.toLowerCase().replace("tour packages", "");
  } else if (name?.toLowerCase?.()?.includes?.("tour")) {
    name = name.toLowerCase().replace("tour", "");
  } else if (name?.toLowerCase?.()?.includes?.("packages")) {
    name = name.toLowerCase().replace("packages", "");
  }
  return name.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, function (letter) {
    return letter.toUpperCase();
  });
};
