import './Banner.css'
import Slider from 'react-slick';
import { Carousel } from 'react-responsive-carousel';

export default function Banner(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    }
        
    const listaLugares = [
        {
            nome:"rio de janeiro",
            regiao:"sudeste",
            mapaRegiao:"https://static.escolakids.uol.com.br/conteudo_legenda/50d28fe9ee1603f2ab360bb42a6c2dc9.jpg",
            imagem:"https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg",
        },
        {
            nome:"são paulo",
            regiao:"sudeste",
            mapaRegiao:"https://static.escolakids.uol.com.br/conteudo_legenda/50d28fe9ee1603f2ab360bb42a6c2dc9.jpg",
            imagem:"https://cognatis.com.br/wp-content/uploads/2021/01/Sao-Paulo-467-banner-1.jpg"
        },
        {
            nome:"minas gerais",
            regiao:"sudeste",
            mapaRegiao:"https://static.escolakids.uol.com.br/conteudo_legenda/50d28fe9ee1603f2ab360bb42a6c2dc9.jpg",
            imagem:"https://direcional.com.br/wp-content/uploads/2021/08/minas-gerais-3.jpg"
        },
        {
            nome:"paraná",
            regiao:"sul",
            mapaRegiao:"https://static.escolakids.uol.com.br/conteudo_legenda/0cb4a27856c714b1d84f3e27e9c87bbb.jpg",
            imagem:"https://www.viagensecaminhos.com/wp-content/uploads/2022/01/catedral-maringa-pr.jpg"
        },
        {
            nome:"piauí",
            regiao:"nordeste",
            mapaRegiao:"https://static.escolakids.uol.com.br/conteudo_legenda/8fa54d343d855efe5cc7ceeb50f6cb2b.jpg",
            imagem:"https://www.maladeaventuras.com/wp-content/uploads/2020/11/coqueiro1.jpg"
        }
    ]
  
    return(
        <main>
            <Slider {...settings} className='carrossel'>
                {listaLugares.map(lugares => (
                    <div className='lugares' key={lugares.nome}>
                        <img src={lugares.imagem} alt={lugares.nome} />
                        <h2>{lugares.nome}</h2>
                    </div>
                ))}
            </Slider>
        </main>
    )
}