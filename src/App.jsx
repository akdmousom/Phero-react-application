import { useEffect, useState } from "react";
import Categorys from "./components/Main/Catagorys";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";


const App = () => {
  const [categorys, setCategorys] = useState([]);
  const [categoryDataByID, setCategoryDataByID] = useState([])
  const [selectId, setSelectId] = useState('1000')


  // Categorys Data Fetch And Save
  useEffect(() => {
    const fetchCategorys = async () => {
      const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
      const data = await res.json()


      const datacat = data.data
      const newCategory = [...datacat]
      const prevCategory = [...categorys, newCategory]
      setCategorys(prevCategory[0])

    }


    fetchCategorys()
  }, [])

  useEffect(() => {
    const fetchDataById = async () => {
      const idres = await fetch(`https://openapi.programming-hero.com/api/videos/category/${selectId}`)
      const iddata = await idres.json()

      const prevIddata = [iddata.data]
      const newdata = prevIddata[0];
      setCategoryDataByID(newdata)

    }
    
    fetchDataById()

  }, [selectId])

  const handleClick = (id) => {

    setSelectId(id)

  }


  const SortData = () => {
    const cat = categoryDataByID.sort(compare)
    function compare(a, b) {

      let x = parseFloat(a.others.views);
      let y = parseFloat(b.others.views);
      if (y < x) { return -1; }
      if (y > x) { return 1; }
      return 0;

    }

    const sortCat = [...cat]
    setCategoryDataByID(sortCat)



  }

  return (

    <div>

      <Navbar />
      <Categorys SortData={SortData} handleClick={handleClick} category={categorys} />
      <Cards categoryDataByID={categoryDataByID} />

    </div>
  );
};

export default App;