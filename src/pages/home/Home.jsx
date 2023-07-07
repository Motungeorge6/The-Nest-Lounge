import React from "react";
import { Parallax } from "react-parallax";
import Bar from '../../assets/bar.jpg'
import "./homeStyled.css";
import styles from './home.module.scss'
import { Button, Footer, Text } from "@mantine/core";
import SideBarButton from "../../component/SideBarButton";

const Home = () => {
  return (
    <>
      <SideBarButton/>
      <Parallax strength={300} bgImage={Bar}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <div className={styles.up}>
              <div className={styles.left}>
                <Text size={'24px'}>Home title</Text>
              </div>
              <div className={styles.right}>
                <a href="/">Home</a>
                <a href="/">about</a>
                <a href="/">Menu</a>
                <a href="/">Order Online</a>
              </div>
            </div>
            <div className={styles.down}>
              <div className={styles.left}>
                <Text size={'44px'}>Drink, Eat, Enjoy.</Text>
              </div>
              <div className={styles.right}>
                <Text size={'24px'}>Pub & Eatery | Est. 2035</Text>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax strength={300} bgImage={'https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&w=1600'}>
        <div className={styles.container2}>

          <header>
            <Text size={'24px'} mb={20}>

              Make Yourself at Home
            </Text>

            <div>
              <Text size={'44px'}>
                ENJOY PREMIUM DRAFT BEER, GOOD
              </Text>
              <Text size={'44px'}>
                WINES, AND OUR HEARTFUL DISHES
              </Text>
            </div>
          </header>
          <main>
            <div className={styles.up}>
              <div className={styles.div}>
                <Text w={'100%'} align="left">
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </Text>
                <Button radius={0} variant="outline" color="dark" size="lg">
                  Book a table
                </Button>
              </div>
            </div>
            <div className={styles.down}>
              <div className={styles.bar}>
              <Text w={'100%'} align="left">
                Hello, Neighbour
               </Text>           
                <Text w={'100%'} align="left"> 
                Happy Hour                
                </Text>
                <Text w={'100%'} align="left">
                  12PM-3PM Monday-Thursday
                </Text>
              </div>
            </div>
          </main>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={'https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&w=1600'}>
        <div className={styles.container3}>


          <div className={styles.up}>

          </div>
          <div className={styles.down}></div>

        </div>
      </Parallax>


    </>
  );
};

export default Home;
