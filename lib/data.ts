import footerData from "@/data/site/footer.json";
import jojoGlobalData from "@/data/site/jojo-global.json";

export async function getFooterData() {
  return footerData;
}

export async function getJojoGlobalData() {
  return jojoGlobalData;
}
