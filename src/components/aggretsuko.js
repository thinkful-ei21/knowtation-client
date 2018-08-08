import React from 'react';
import {connect} from 'react-redux';

import '../styles/aggretsuko.css'


const meh = "https://media.giphy.com/media/t6Kf2qs5fgWiAlOig5/giphy.gif"
const happy = "https://media.giphy.com/media/2opk4C7c1fHPy/giphy.gif"
const excited = "https://media.giphy.com/media/n31H48lHjiTUk/giphy.gif"
const goingHam = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANEg4OEBAQEA4SFwoLFwoKDQ8ICQ0KIB0WFiAdFh8kHSgsJBolJxMfLTEtJSkrLjouFx8/ODMtNygtLisBCgoKDg0OFxAPFSsdFRkrKystLSstLS0rLS0tKzc3NystLTctKzcrLSs3LSsrLSsrLSstKy0rKy0tKystKystLf/AABEIAIAAgAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcBCAD/xAA7EAACAQIEAwYCCQMDBQAAAAABAgMAEQQFEiEiMUEGEzJRYYFxkQcUI0JSobHB0WKC8BVy4TNTkuLx/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgQAAQMFBv/EACQRAAICAgEEAgMBAAAAAAAAAAABAhEDITEEEhNBUWEFIjIj/9oADAMBAAIRAxEAPwDLUFOgU2lOgUg2eygtCDSQKcIrgFUmW1sWK7XbeVPJgnbpbrueL42oaLlnhBbYyT500R7/AAFXeFyXVubnrudK/KrSDKkXn8lFXpCOXrlwgR7pvwt8q4YW/C3yo8jy6O38mvny+MdD7Gp3IXfWP4AAi3Q+4K10D/L0aPliN/7DVUHF5ALEgD4odLVO5M0j1i9oHRXVFTMRlTpyv/dw1FAK7EW9ajHcXUQm1sUBXDSgKS4oL2PetEWOpFqjpVrgsvL8TbL+EDnWjOf5owWyEELbAE/AVOwuTu/Pl5LxMfjV/gMqHlpXna3E1XEUQUWG3woW6EMvWOWkVOCyVUG+x8l8RqyiwqLyUfG3FTkjAcyB8TTP1yMdfSwoHL7FW5S5FGE9PkKQENJbMEH4rfDhpJzBPJvjbVVrasHtZJWO3X866aY+vR+ZpxJ0b7w+B4aG17J2sWFFfFf/AKa6COhHsaUKmiV8kWaG/MXqtxWWK3ID4Hhq8tSSlEnRE2naAnGYBozcDbnbxMKiEX/znR1icMJBbr0P9VCGZ4PumuOXFf8ACGqLZ1ek6tv9ZM+yLLO9IZh6hD4fifSjSDCqi8r+ZPRqbyzCiJBtz6eS9KjySO792xsOd1PJak5N8HNnJyf0Sp8UqWA3/pWmUM0/hHdp+MjSxqdhIYUBZbf75OK9v0pH+qQ3/wCqg9DINVYvyS4QcYQW2xzBZCjXZyX9WPCKlx4GNbWRdvMVOwygxXQ6r6OJTq4r0iPAlm2Ntr3I+9flWU8ORNNjMJ4+DN857/EYloIg/NtMRPCq9TcUxLJJFG8bOwkScDfxLt0JogOS4mKXESIUSQvEyhTzQE339bi462pMvZrEYje6SYhZO8UE6UeI7nUfQ/lTkckaq9kcFzQQphI2VNSKbhDcr94jn6V2fJYgNWiw8wxWriLL9Gz21aVJ0nhD23A9KfcAxEHoGPP0W1KLBkk2ySy4kkmgWGRRHkXB8i2qvjkvlK4H/lVdFnPE2ptIAIsx8jT79pYb/wDUUbtuCNOm4qPBmRSlhaGMXhniYBnOk8pL8NWMa2Ub39fOocGIjxaoA6s2iU2UhmV7qAD8b05gJCQUbxIWX41rBS4kLZYKLtcDzCoGZYTvRyueIG/4f5qzIpLpetLoyTadoVMwRSfLVtVXigEw80zEBmDAbc2vyqfjzqKRj7xv/bVJ2tGpwgchYxF9mfC1xzosaUppF01GyvwaYjHMsMYbmx7tTpUL5k+VE0n0b4pUuDG5590rFW89idqmfRRGgedjbXaIBjxcJ51pg9PmOjU+2sbqheKcvZh2XYufLZCpvoBs8DfHci9algMUkyiRSNB0sHNvDbrVR9ImSiRPrSjiThew8SeftQVlOYyALBrbSC3CD92x2os6jLHaRMNrJTCfGygu5U7XblT2RT6ZRfqGAJ/FaqRJtP6bVNLhTtz/ABA8IavNxtZTvuK8YVYrFWO/Pw286FMyzSWUjC4ddbtpHANVV2Y567jQrbnUtx4vL50edkckGEhDsPt5NLM1tTL6fLf3r00HGMLa2ecyXLJXoBj9HuNYXIS/E2jvdLFiettr0LZ3kU2FYpKjIeYuBpZfQ9RXoAnTt70KfSRhkfCazbXGyWf72k9KkMnc6oOUO1WmYYWaMhlOlxuCp4g3mKKOzucvO7NIeO43+8Qep+VDuPQAn9/f+akdno5O8DqjMnEpZQdK7X3rHqMaSN4Nyjs0kGuEU3hpNSKfRedIea1c/wB6ItDuCTXMzdEFt+jf5egztbiw2LdVOwESEf1gb0c5QNMckh662v8A0gX/AGrKTG+IlkZRcku5I6LfnRdJTm5MZnD/ADVew07B5mIMQmrZJNUbE9L8jW1ob9b9bg8/WvM2GxJT48XswItXoLsxi++weFkve8cQv4uICx2ro56dUJYouNpk/GYdZUeNvCwaO5OniIrHMny13xkmG6r30fDxen8Gvu1OfYmbHYjBSTFYlleNQ7d1EqX2v6UdZb2dRIXiRisjqw+uR8OI1Ec7+XpVprspltNSTHsB2Yjs1yTfzHhY7/pUfOMqjwySzuR3SK738LBun52odyXshmiYxBLiJfqqMspmGIdhKoIIAFwQTax6WvWhZtl6YqMxSIGRtN42J3UfClVhhdjXmnVGT9h8J9cxiA7opbEMp8JQbj5mtr/bSP7vOsC7QIMuxDiGTSCXASGTjRfIgfvvRN9HPbHFYzFrhpn1IY5SNdtmFrUxlppCsYtO2awR/Nj/AD0rM/pIz6NwuHiYMo1OzL4Cw6VoOZzCOGZzyVJX/L/ivO2Nxmsk356jV4EltlZE3pEPHS3v87UQdiMeF7zDnbvCrDf0Kn9qFpWv+tKwc5idXBsVKnbqt9xQ5/3VDGKPatmnZadnT8JtXZBvvVTlGNZlVhzfST6Vfsl+m9IJVoCXJJcd3hXt/wBqVrj8Vif3qH2B7KBoHmcfaSBrX6KeV/berDLissOhrEWaMqfFRXkNgmkCwUgWHQUr02Rxk4v5H8n8Jo88YrDP38kKAs3eSxBAObAkAV6G7N5ecJhcNATd0RAxH4zuT8yaDuyXZtYszzKSVbvG6yRhhw6ZLm4/SjXNS+lVU2uVUsDyXlXTnPQpyzKvpUyTjOYRj7N27l7DhDgbH35e1QOyGY5rDFJNhWEuGh8cc7CRI7C/XkDWo9psvH+nYmJhyid7kauMb3+NYrk2YvHDicKvgxH1ct6KDf8AQ1alrZpDH5HS5NHPa3OGCrHl0ephrUiQPqi23UauXKh8zZ5nDywh9AjbupI45BhYkY9Dbc1SQTTRPFKkrh4gqo9/BEL7W8tztU/sxm75filnLFo5DpmB4tQJuT8QTehWRNjc/wAfkiroD8bA0MkkbG7Izxlh1YGx/StI+ifI5IZUxbgBJo5Qq249NxY+9jWfZqQ80r34WeVr/wBJY16Eiw4TDQCO3AkOkj8FlNFJ6tCTi06ZY4/D99FLETbWssd/6iLD23rzXm2Ckwkr4eRSrodO/UDkR6GvSmEmLjiG41Dfrahnt52RTM4y6gLikAKyr99L8m9LVISAqmCOXdnExEELyLdXgwrmQLxK5Mtjf2FZw+EfUAAeLZSOK+9q9J4LLEigjw9vCkUOq3MAc/nv7msnwGV8ei19JcavJb1m5uLdhOaqiT2fwPdIvppUE/nVuRSkQKAByFfGsJO3YveyPBN9Xk32jfa3k1qOMn+9bkQj3Hh3oPxMAdSp+N/KrrsZmGonDyEd4gW1/vIOQvWSxpTtG6yOqYRnDL3hmtxlUjJ80BNvfc/OlzgEevC1velykAb8udzw1QYbNlaWTU66fCASPEDzpttURcFpnsevDYlfOLEfof4rzrlQr0bjJFeGaxB+zmPCwbhKmvN+XSFSTY2FiSOLT0F/ei5Q10U1HImy4I/zyrjrtb8qbM4vb23635UsyD99/FS7i07PVLNjmqsrsxw9gLfOtx7FYn61gMK199CxEA8nU6d/YCsXxpBUi/rWgfQ1md48RhCd0bvlBP3Dzt7imIttbPPfkIRjO4h7hwVJ9NX51MdyVPQ/CqzFZgsJYkbatNvDZap857Vg/Y4XidhYykcKL1rPuo5kyT2lz7u1GHhN5mC6mU6u79/Oh3CQd2PMnct5tTWGj7vdjd24ixOpj71LDj/is3JswbOGk18zCvgKGiJEZ5JySAotxbmm1w0+tZNehl++h4g1WQNfCrTZPsivBI99c7t8WNIOWJ/V86m3rmqqbCt0QzgLeF2HS2o1AOTiLvNAS0itEwK+JDzFW7TDzrqtfn876aJSaKTa4KTKsviwyTxywd/HLo1MxOqO17FT0IqNluR4ItiFmlkXUrJEZFP2J5gsRzPIfC9Eix25H2vqUU3Nhlk5qL/iPi/5o1N+zVZ5rhlF2b7JDFRY4zuiyj7GKTXpUyjckeh2B9DVX2LafL8X3xjOgCaJwDp1KbgW89wPlRScrT4dNhTX+nspur+vhDcVX5NFSzSlyyTjZpsa5LcCXJ0jxaqcw2GWIWA/uI4j8ajdxNy7wW5bCu/U36yHy2rJvdmTbZ2fSLksPO+qkKb7g+9OLlqdeL/dS5YrWsPlUTKEJJbmfcjVVZmOb2BChrDyHEasRGar8Xh+7bV908/RatcmmOu5Wf/Z"

export class Aggretsuko extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winStreak: 0
    }
  }

  onCorrectAnswer() {
    this.setState({
      winStreak: this.state.winStreak + 1
    })
  }

  onWrongAnswer() {
    this.setState({
      winStreak: 0
    })
  }

  aggretsuko() {
    let currentScore = this.state.winStreak;
    if (currentScore >= 0 && currentScore < 1) {
      return meh
    }
    else if (currentScore >= 1 && currentScore < 5) {
      return happy
    }
    else if (currentScore >= 5 && currentScore < 9) {
      return excited
    }
    else {
      return goingHam
    }
  }

  render() {

    return (
      <div className="aggretsuko">
        <button onClick={() => this.onCorrectAnswer()}>Correct Answer</button>
        <button onClick={() => this.onWrongAnswer()}>Wrong Answer</button>
        <p className="current-score">{this.state.winStreak}</p>
        <img className="gif" src={this.aggretsuko()} alt='w/e'/>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Aggretsuko);
