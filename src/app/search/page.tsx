"use client"
import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from "next/navigation"
import ProductList from "@/components/ProductList/ProductList"

const SearchPage = () => {
    const searchParams = useSearchParams()
    const types = searchParams.get("types")
    const country = searchParams.get("locations")
    
    
    
    const [footerVisible, setFooterVisible] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
          // Sprawdź, czy referencja do elementu "footer" istnieje
    
            // Pobierz wysokość okna przeglądarki
            const footerHeight = document.querySelector('#footer').getBoundingClientRect().height;
            
            
            // Oblicz pozycję dolnej krawędzi widoku w oknie przeglądarki
            const bottomOfViewport = window.innerHeight + window.scrollY;
            
            // Oblicz, ile pikseli stopki jest widoczne (jeśli wartość jest ujemna, stopka jest w pełni widoczna)
            const visibleFooter = bottomOfViewport - document.body.scrollHeight + footerHeight;
    
            setFooterVisible(visibleFooter > 0 ? visibleFooter + 10 : 10 );
            // setFooterVisible(visibleFooter);
            
            
            console.log('/')
            // console.log('windowHeight: ' + windowHeight)
            // console.log('footerHeight: ' + footerHeight)
            // console.log('scroll: ' + scroll)
            // console.log('bodyScroll: ' + document.body.scrollHeight)
            // console.log('END: ' + visibleFooter)
            
        }
    
        // Dodaj nasłuchiwacz zdarzeń scrolla
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
    
        // Wywołaj funkcję obsługującą scroll w celu ustawienia początkowej wysokości
        handleScroll();
    
        // Usuń nasłuchiwacz zdarzeń scrolla po odmontowaniu komponentu
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleScroll);
        };
      }, []);

    return (
        <>
            <div className="container mapContainer">
                <ProductList country={country} />
                <div id="map" style={{ bottom: `${footerVisible}px`}}>
                    
                </div>
            </div>
        </>
    )
}

export default SearchPage