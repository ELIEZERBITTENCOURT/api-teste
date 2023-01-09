class ScoreController {
    constructor() {
      this.service = null;
    }
    saveScore(dto) {
      let movieDTO = this.service.saveScore(dto);
      return movieDTO;
    }
  }