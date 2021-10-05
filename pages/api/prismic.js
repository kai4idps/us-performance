import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD", "POST", "OPTIONS"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const getPrismicData = () => {
  return {
    // #region columnDefs
    title: [
      {
        type: "heading2",
        text: "Furbo Dog Camera",
        spans: [],
      },
    ],
    subtitle: [
      {
        type: "heading1",
        text: "Keep your dog safe even when you're not home  ",
        spans: [],
      },
    ],
    content: [
      {
        content_array: {
          id: "YTCnzBEAAC4A_1cg",
          type: "shop_button",
          tags: [],
          slug: "general-shop-button",
          lang: "en-ca",
          first_publication_date: "2021-09-02T10:30:41+0000",
          last_publication_date: "2021-09-22T08:22:58+0000",
          data: {
            shop_button_text: "Shop Now",
            center: false,
          },
          link_type: "Document",
          isBroken: false,
        },
      },
      {
        content_array: {
          id: "YTCi4xEAAC8A_0EZ",
          type: "video_button",
          tags: [],
          slug: "key-visual-video-button",
          lang: "en-ca",
          first_publication_date: "2021-09-02T10:09:46+0000",
          last_publication_date: "2021-09-17T18:39:47+0000",
          data: {
            watch_video_text: "Watch Video",
            video_link: {
              height: 113,
              width: 200,
              embed_url: "https://www.youtube.com/watch?v=a47L1wlP_-E",
              type: "video",
              version: "1.0",
              title: "Meet Furbo: The Camera That Helps Train a Dog",
              author_name: "Furbo Dog Camera",
              author_url: "https://www.youtube.com/c/FurboDogCamera",
              provider_name: "YouTube",
              provider_url: "https://www.youtube.com/",
              cache_age: null,
              thumbnail_url: "https://i.ytimg.com/vi/a47L1wlP_-E/hqdefault.jpg",
              thumbnail_width: 480,
              thumbnail_height: 360,
              html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/a47L1wlP_-E?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            },
            center: true,
          },
          link_type: "Document",
          isBroken: false,
        },
      },
    ],
    center_image: {
      dimensions: {
        width: 300,
        height: 150,
      },
      alt: null,
      copyright: null,
      url: "https://images.prismic.io/furbo-prismic/df944518-7cd1-4414-aa0f-551d536dcd68_phone-view.png?auto=compress,format&rect=0,0,300,150&w=300&h=150",
    },
    banner_image_left: {},
    banner_image_right: {},
    banner_content: [
      {
        type: "paragraph",
        text: "#1 Best Seller on Amazon.",
        spans: [
          {
            start: 0,
            end: 24,
            type: "strong",
          },
        ],
      },
      {
        type: "paragraph",
        text: "2 Day Free Shipping. Lifetime Warranty.",
        spans: [],
      },
    ],
    mobile_font_size: 13,
    banner_background_color: "#f7cd3d",
    banner_font_color: "#434343",
    banner_type: "Content Only",
    unit_countdown_text_content: [
      {
        type: "paragraph",
        text: "BIGGEST SALE EVER! SAVE 53% NOW",
        spans: [
          {
            start: 0,
            end: 31,
            type: "strong",
          },
          {
            start: 19,
            end: 27,
            type: "label",
            data: {
              label: "Red Font",
            },
          },
        ],
      },
    ],
    units_remaining_text: "ONLY {units} UNITS LEFT!",
    sales_end_countdown_text_content: [
      {
        type: "paragraph",
        text: "BIGGEST SALE ENDS IN",
        spans: [
          {
            start: 0,
            end: 20,
            type: "strong",
          },
          {
            start: 13,
            end: 17,
            type: "label",
            data: {
              label: "Red Font",
            },
          },
        ],
      },
    ],
    countdown_date: "2021-09-25",
    hours_text: "Hours",
    minutes_text: "MInutes",
    seconds_text: "Seconds",
    key_visual_image_desktop: {
      dimensions: {
        width: 1280,
        height: 600,
      },
      alt: null,
      copyright: null,
      url: "https://images.prismic.io/furbo-prismic/918b4b06-fa9c-4bc1-b9c3-520c1a994e80_homepage-kv-desktop.jpg?auto=compress,format&rect=0,23,1180,553&w=1280&h=600",
    },
    key_visual_image_mobile: {
      dimensions: {
        width: 375,
        height: 500,
      },
      alt: "Furbo Dog Camera | #1 Best Seller on Amazon.",
      copyright: null,
      url: "https://images.prismic.io/furbo-prismic/35b96df6-ffc6-4999-8087-d7a51c285c19_homepage-kv-mobile.jpg?auto=compress,format&rect=0,20,345,460&w=375&h=500",
    },
  };
  // #endregion
};

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  res.setHeader("Access-Control-Allow-Origin", "*");
  const jsonData = getPrismicData();

  res.status(200).json(jsonData);
}
