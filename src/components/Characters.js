import React, { Component } from "react";
import axios from "axios";
import Flip from "react-reveal/Flip";

//components
import CharacterCard from "./CharacterCard";
import ChagePage from "./ChagePage";

export default class Characters extends Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
      characters: []
    };

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.getData(this.page);
  }

  getData(page) {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        const characters = res.data.results;
        this.setState({ characters });
      });
  }

  changePage(e) {
    if (e.target.innerText === "NEXT") {
      if (this.page < 20) {
        this.page++;
        this.getData(this.page);
      }
    } else if (this.page > 1) {
      this.page--;
      this.getData(this.page);
    }
  }

  render() {
    return (
      <>
        <div className="listContainer">
          {this.state.characters.map(character => (
            <Flip left key={character.id}>
              <CharacterCard
                key={character.id}
                name={character.name}
                species={character.species}
                image={character.image}
                location={character.location.name}
                gender={character.gender}
                id={character.id}
                status={character.status}
              />
            </Flip>
          ))}
        </div>
        <ChagePage changePage={this.changePage} />
      </>
    );
  }
}
