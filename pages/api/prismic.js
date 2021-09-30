export default function handler(req, res) {
  res.status(200).json({ 
    key_visual_image_mobile: {
      url: 'https://images.prismic.io/}furbo-prismic/35b96df6-ffc6-4999-8087-d7a51c285c19_homepage-kv-mobile.jpg?auto=compress,format&rect=0,20,345,460&w=375&h=500'
    }, 
    key_visual_image_desktop: {
      url :'https://images.prismic.io/furbo-prismic/918b4b06-fa9c-4bc1-b9c3-520c1a994e80_homepage-kv-desktop.jpg?auto=compress,format&rect=0,23,1180,553&w=1280&h=600'
    }, 
  })
}