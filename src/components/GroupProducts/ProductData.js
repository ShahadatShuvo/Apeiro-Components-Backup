export const strapiProductInterface = {
  id: 1,
  attributes: {
    Name: "string",
    Slug: "string",
    Description: "",
    Feature_Image: {
      data: {
        attributes: {
          strapiImage: {
            url: "",
            // many more
          },
        },
      },
    },
    Gallery_Image: {
      data: {
        attributes: {
          strapiImage: {
            url: "",
            // many more
          },
        },
      },
    },
    Is_Variant_Product: true,
    Product_Variations: [
      // First Variations Array
      {
        Name: "product name-1",
        Details: "product detail-1",
        Regular_Price: 500,
        Sale_Price: 470,
        Icon: "",
        Variations: {
          // Second Variation Array
          data: [
            {
              id: 1,
              attributes: {
                key: "page",
                value: 10,
                title: "react",
              },
            },
            {
              id: 2,
              attributes: {
                key: "page",
                value: 15,
                title: "wordpress",
              },
            },
          ],
        },
      },
      {
        Name: "product name-2",
        Details: "product detail2",
        Regular_Price: 800,
        Sale_Price: 670,
        Icon: "",
        Variations: {
          data: [
            {
              id: 1,
              attributes: {
                key: "page",
                value: 10,
                title: "react",
              },
            },
            {
              id: 2,
              attributes: {
                key: "page",
                value: 15,
                title: "wordpress",
              },
            },
          ],
        },
      },
      {
        Name: "product name-3",
        Details: "product detail",
        Regular_Price: 500,
        Sale_Price: 470,
        Icon: "",
        Variations: {
          data: [
            {
              id: 1,
              attributes: {
                key: "page",
                value: 5,
                title: "WordPress",
              },
            },
            {
              id: 2,
              attributes: {
                key: "page",
                value: 15,
                title: "react",
              },
            },
          ],
        },
      },
      {
        Name: "product name-4",
        Details: "product detail",
        Regular_Price: 500,
        Sale_Price: 470,
        Icon: "",
        Variations: {
          data: [
            {
              id: 1,
              attributes: {
                key: "page",
                value: 5,
                title: "WordPress",
              },
            },
            {
              id: 2,
              attributes: {
                key: "page",
                value: 15,
                title: "react",
              },
            },
          ],
        },
      },
    ],
    Product_Visibility: true,
    Regular_Price: 200,
    Sale_Price: 180,
    category: {
      data: {
        attributes: {
          categoryAttributes: {
            Name: "string",
            Slug: "string",
            //many more
          },
        },
      },
    },
    createdAt: "string",
    updatedAt: "string",
    publishedAt: "string",
  },
};
