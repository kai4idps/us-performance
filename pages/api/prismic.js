import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'OPTIONS'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
};

export default async function handler(req, res) {

  await runMiddleware(req, res, cors);

  res.setHeader('Access-Control-Allow-Origin', '*');

  res.status(200).json({ 
    key_visual_image_mobile: {
      url: 'https://images.prismic.io/}furbo-prismic/35b96df6-ffc6-4999-8087-d7a51c285c19_homepage-kv-mobile.jpg?auto=compress,format&rect=0,20,345,460&w=375&h=500'
    }, 
    key_visual_image_desktop: {
      url :'https://images.prismic.io/furbo-prismic/918b4b06-fa9c-4bc1-b9c3-520c1a994e80_homepage-kv-desktop.jpg?auto=compress,format&rect=0,23,1180,553&w=1280&h=600'
    }, 
  })
}