import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'pm':"375px",
      'sg':"360px",
       'mmd' :"912px",
       'llg' :"1280px"
      
    }
   
  },
  plugins: [],
});