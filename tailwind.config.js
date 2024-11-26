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
      'ipmin':"768px",
       'mmd' :"912px",
       'llg' :"1024px"
      
    }
   
  },
  plugins: [],
});