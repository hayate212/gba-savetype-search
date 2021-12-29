import { GBACart, GBACartFeatures, GBASoftware } from "../types";

export const getSoftwareInfo = (software: Element): GBASoftware => {
  const getValueFromTagName = (e: Element, tagName: string): string => {
    const items = e.getElementsByTagName(tagName);
    if (items.length > 0) {
      return items[0].innerHTML.toString() ?? "";
    }
    return "";
  };
  const infoItems = Array.from(software.getElementsByTagName("info")).reduce<
    Record<string, string>
  >((items, info) => {
    const name = info.getAttribute("name");
    const value = info.getAttribute("value");
    if (name) items[name] = value ?? "";
    return items;
  }, {});
  const getCartData = (): GBACart => {
    const cart = Array.from(software.getElementsByTagName("part"))
      .filter((element) => element.getAttribute("name") === "cart")
      .find((_, i) => i === 0);
    if (!cart) return { features: {} };

    const features = Array.from(
      cart.getElementsByTagName("feature")
    ).reduce<GBACartFeatures>((acc, element) => {
      const name = element.getAttribute("name");
      const value = element.getAttribute("value");
      if (name) acc[name] = value ?? "";
      return acc;
    }, {});

    return {
      features: {
        ...features,
        slot: (features?.slot ?? "unknown").toUpperCase(),
      },
    };
  };
  return {
    year: getValueFromTagName(software, "year"),
    publisher: getValueFromTagName(software, "publisher"),
    description: getValueFromTagName(software, "description"),
    info: infoItems,
    cart: getCartData(),
  };
};
