import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Seir-Kale",
      social: {
        github: "https://github.com/AlexMercedCoder/starlight-class-template/",
      },
      sidebar: [
        {
          label: "Curriculum",
          autogenerate: { directory: "curriculum" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Other",
          autogenerate: { directory: "other" },
        },
      ],
    }),
  ],
});
