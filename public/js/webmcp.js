(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      {
        name: "browse_products",
        description: "Browse electric dirt bikes by category",
        inputSchema: { type: "object", properties: { category: { type: "string", description: "Category slug to browse" } } },
        execute: async ({ category }) => {
          const url = category ? "https://volttrack.com/shop/" + category + "/" : "https://volttrack.com/shop/";
          window.location.href = url; return { url };
        }
      },
      {
        name: "browse_brands",
        description: "Browse electric dirt bikes by brand",
        inputSchema: { type: "object", properties: { brand: { type: "string", description: "Brand slug" } } },
        execute: async ({ brand }) => {
          const url = brand ? "https://volttrack.com/brands/" + brand + "/" : "https://volttrack.com/brands/";
          window.location.href = url; return { url };
        }
      },
      {
        name: "contact",
        description: "Contact VoltTrack for orders, advice or aftercare (human-assisted ordering)",
        inputSchema: { type: "object", properties: {} },
        execute: async () => { window.location.href = "https://volttrack.com/contact/"; return { url: "https://volttrack.com/contact/" }; }
      }
    ]
  });
})();
