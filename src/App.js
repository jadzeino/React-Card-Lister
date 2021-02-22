import React,{useState} from "react";
import {CardList} from "./components/cards/card-list";
import {SearchBox} from "./components/cards/search-box";
import {certificatesList} from "./cert/certificates";
import {Scroll} from "./components/cards/scroll";
import ErrorBoundary from "./components/error-boundary";

export const App = () => {
    const [searchField, setSearchField] = useState("")
    const filterList = certificatesList.filter(item => item.name.includes(searchField))
    return <div className="tc">
        <h1 className="f0">AWS CERTIFICATES</h1>
        <SearchBox setSearchField={setSearchField}/>
        <Scroll>
            <ErrorBoundary>
                <CardList list={filterList}/>
            </ErrorBoundary>
        </Scroll>
    </div>

}
