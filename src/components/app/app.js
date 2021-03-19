import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import 'firebase/firestore';
import 'firebase/auth';
import styles from'./app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Settings from '../../routes/settings';
import AddItem from '../../routes/additem';
import EditItem from '../../routes/edititem';
import Menu from '../menu';
import { ButtonAppContainer } from '../../shared/uibuttons';
//simport testdata from '../../testdata.js';

function App() {

  const [data, setData] = useState([]);
  const [specielist, setSpecielist] = useState([]);
  const [serielist, setSerielist] = useState([]);

  const user = useUser();

  const itemCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('item');
  const { data: itemCollection } = useFirestoreCollectionData(itemCollectionRef, {initialData : [], idField: "id"});

  
  const serieCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('serie');
  const { data: serieCollection } = useFirestoreCollectionData(serieCollectionRef.orderBy("serie"), { initialData: []});

  const specieCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('specie');
  const { data: specieCollection } = useFirestoreCollectionData(specieCollectionRef.orderBy("specie"), { initialData: []});

 

  useEffect(() => {
    setData(itemCollection);
  }, [itemCollection]);

  useEffect(() => {
    const species = specieCollection.map(obj => obj.specie);
    setSpecielist(species);
  }, [specieCollection]); 
 
  useEffect(() => {
    //setData(testdata);
    setSerielist(["Series 1", "Series 2", "Series 3", "Series 4", "amiibo Festival"]);
  }, []);

  useEffect(() => {
    const series = serieCollection.map(obj => obj.serie);
    setSerielist(series);
  }, [serieCollection]); 

  const handleItemSubmit = (newitem) => {

      itemCollectionRef.doc(newitem.id).set(newitem);

  }

  const handleItemDelete = (id) => {

    itemCollectionRef.doc(id).delete();

  }

 const handleSpecieSubmit = (newspecie) => {
    
  specieCollectionRef.doc().set({specie: newspecie});

  }

  const handleSerieSubmit = (newserie) => {

    serieCollectionRef.doc().set({serie: newserie});

  }

  return (
  <ButtonAppContainer>
    <div className={styles.app}>
      <Router>
        <Header/>
          <Content>
            <Route exact path="/">
            <Items data={data} />
            </Route>
            <Route path="/settings">
              <Settings 
                 species={specielist} 
                 onSpecieSubmit={handleSpecieSubmit}
                 series={serielist}
                 onSerieSubmit={handleSerieSubmit}
                
                />
            </Route>
            <Route path="/add">
              <AddItem 
                   onItemSubmit={handleItemSubmit} 
                   species={specielist}
                   series={serielist}
                   />
            </Route>
            <Route path="/edit/:id">
              <EditItem 
                 onItemSubmit={handleItemSubmit} 
                 data={data} species={specielist} series={serielist}
                 onItemDelete={handleItemDelete} />
            </Route>
          </Content>
        <Menu/>
      </Router>
    </div>
  </ButtonAppContainer>
  );
}

export default App;
