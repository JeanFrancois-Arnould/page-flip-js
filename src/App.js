import React from 'react';
import HTMLFlipBook from "react-pageflip";
import './App.scss';

// model de la couverture
const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="page page-cover" ref={ref} data-density="hard">
            <div className="page-content">
                <h2>{props.children}</h2>
            </div>
        </div>
    );
});
/** 
 * model d'une page voir si on le garde comme ca ou on le change !
 * ! voir pour changer le model
 * */
const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                {/* <div className="page-image"></div> */}
                <div className="page-text">{props.children}</div>
                <div className="page-footer">{props.number + 1}</div>
            </div>
        </div>
    );
});

class MyBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            totalPage: 0,

        };
    }

    /**
     * ! ne pas toucher source du souci des ombres
     */
    /*onPage = (e) => {
        this.setState({
            page: e.data,
        });
        
    };
    componentDidMount() {
        this.setState({
            totalPage: this.flipBook.getPageFlip().getPageCount()
        });
    } */

    render() {
        return (
            <div>
                <HTMLFlipBook
                    width={550}
                    height={700}
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    drawShadow={true}
                    disableFlipByClick={true} // désactivation au click sur la page
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={this.onPage}
                    onChangeOrientation={this.onChangeOrientation}
                    onChangeState={this.onChangeState}
                    className="flip-book"
                    ref={(el) => (this.flipBook = el)}
                >

                    <PageCover>Mon livre</PageCover>

                    <Page number={6}>
                    <div className="page" ref={this.ref}>
                        <div className="page-content">
                            <div className="page-image"></div>
                            <h2 className="page-header">gateau-mousse-au-chocolat{this.props.number}</h2>
                            <div className="page-text"> un super gateaux {this.props.children}
                                <div>
                                    <ul>
                                        <li>5 litre de lait</li>
                                        <li>1 oeuf</li>
                                        <li>3 pommes</li>
                                        <li>12 kg de frites</li>
                                        <li>2 huitres</li>
                                        <li>6 truites</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    </Page>
                    <Page number={2}>
                        <div className="page" ref={this.ref}>
                            <div className="page-content"></div>
                            <h2 className="page-header">comment faire{this.props.number}</h2>
                            <div className="page-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem rerum nisi architecto impedit, molestias aspernatur consectetur laborum debitis quisquam quia dolore quam, animi aperiam eaque cum corrupti iusto ipsum.
Voluptatem voluptate ab expedita optio mollitia, qui, quas natus consectetur eos iusto cumque aut soluta consequuntur. Incidunt at nisi voluptatum mollitia? Quasi eligendi neque deleniti rem eveniet similique saepe asperiores.
Maiores rerum ducimus itaque voluptatum aperiam magni possimus modi ab architecto eligendi temporibus distinctio sunt, quos officiis? Laudantium aliquam perspiciatis sapiente! Error dolores voluptatum ipsam architecto! Saepe possimus architecto assumenda.
Cumque velit, nobis obcaecati ea soluta, odit quis tempora exercitationem ipsam dolores ipsum hic, iusto laborum? Vero laborum saepe nisi tempore, quis sint ratione iste est ea et quo assumenda!
Rerum consequuntur quos obcaecati ipsa expedita illum enim non temporibus repellat provident, corrupti sapiente pariatur facilis tempora, cumque fugiat dolorem impedit atque. Error atque incidunt voluptatibus amet. Dolore, reprehenderit amet.{this.props.children}</div>
                        </div>
                    </Page>
                    <Page number={3}></Page>
                    <Page number={4}>Lorem ipsum...</Page>
                    <Page number={5}>Lorem ipsum...</Page>
                    <Page number={6}>Lorem ipsum...</Page>

                    <PageCover>THE END</PageCover>

                </HTMLFlipBook>

            </div>


        );

    }
}


export default MyBook;
