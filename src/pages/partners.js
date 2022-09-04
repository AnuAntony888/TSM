import React, {useState} from "react"
import "./style.css"
import { Link } from "react-router-dom"
export default function Partners(){
    return(
        <div className="partner-items">
            <div className="partner-item item-1">
            <svg width="260" height="120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M129.366 53.7958V60.9605H143.891V68.0786H129.366V79.249H120.059V46.673H145.865V53.7958H129.366Z" fill="white"/><path d="M159.353 53.9819H149.246V46.673H178.719V53.9819H168.66V79.249H159.353V53.9819Z" fill="white"/><path d="M203.442 79.249L196.627 69.1487L189.905 79.249H179.281L191.268 62.7749L179.799 46.673H190.281L196.862 56.0755L203.348 46.673H213.408L201.938 62.4027L214.16 79.249H203.442Z" fill="white"/><path d="M62.2773 86.3022H76.3197V72.4056H62.2773V86.3022Z" fill="white"/><path d="M88.7783 53.1958H62.2773V67.0972H88.7783H93.5977V53.2005H88.7783V53.1958Z" fill="white"/><path d="M62.2773 34.0003V47.897H105.777V34.0003H62.2773Z" fill="white"/><path d="M45 67.0972H59.0377V53.1958H45V67.0972Z" fill="white"/></svg>
            </div>
            <div className="partner-item item-1">
                <svg width="260" height="120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.332 74.6909V43.5269H24V74.6909H29.332Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M43.2202 52.0146C36.6068 52.0146 31.6055 57.0492 31.6055 63.5816C31.6055 70.114 36.7308 75.2733 43.2202 75.2733C49.7096 75.2733 54.8349 70.2388 54.8349 63.7064C54.8349 57.174 49.8336 52.0146 43.2202 52.0146ZM43.2202 69.9891C39.7069 69.9891 36.9788 67.243 36.9788 63.5816C36.9788 60.0449 39.7069 57.2988 43.2202 57.2988C46.7336 57.2988 49.4616 60.0449 49.4616 63.5816C49.5029 67.1182 46.8576 69.9891 43.2202 69.9891Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M68.5981 52.0146C61.9847 52.0146 56.8594 57.0492 56.8594 63.7064C56.8594 70.3636 61.9847 75.2733 68.4741 75.2733C74.9635 75.2733 80.0888 70.2388 80.0888 63.7064C80.0888 61.418 79.3862 59.3376 78.2702 57.7565L79.9648 57.0492V52.722H72.3595C71.1195 52.1395 69.8381 52.0146 68.5981 52.0146ZM68.5981 69.9891C65.0848 69.9891 62.3567 67.243 62.3567 63.5816C62.3567 60.0449 65.0848 57.2988 68.5981 57.2988C72.1115 57.2988 74.8395 60.0449 74.8395 63.5816C74.8808 67.1182 72.0288 69.9891 68.5981 69.9891Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M74.8825 76.064C74.7584 79.7254 72.0304 82.3467 68.6411 82.3467C65.1277 82.3467 62.3997 79.6006 62.3997 76.064H56.9023C56.9023 82.7212 62.0277 87.6309 68.5171 87.6309C75.0065 87.6309 80.2558 82.5964 80.2558 76.064H74.8825Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M82.3633 52.7222V74.691H87.7367V52.7222H82.3633Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M85.2165 50.1843C87.3658 50.1843 88.9778 48.5616 88.9778 46.6476C88.7298 44.484 87.1592 42.8613 85.2165 42.8613C83.2738 42.8613 81.7031 44.484 81.7031 46.6476C81.7031 48.5616 83.2738 50.1843 85.2165 50.1843Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M93.3169 52.722H90.4648V57.5069H93.3169V74.566H98.6489V57.5069H101.708V52.722H98.6489V45.9399H93.3169V52.722Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M113.776 52.0146C107.163 52.0146 102.285 57.0492 102.285 63.7064C102.285 70.3636 106.708 75.0653 113.776 75.0653C117.537 75.0653 121.051 73.5674 123.696 70.9461L119.935 67.1598C118.116 68.9905 116.173 70.0307 113.9 70.0307C110.841 70.0307 108.651 68.2 107.989 65.5787H124.936V64.3305C124.936 57.0492 120.265 52.0146 113.776 52.0146ZM107.865 61.418C108.651 58.547 110.717 56.966 113.569 56.966C116.421 56.966 118.571 58.5887 119.149 61.418H107.865Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M138.248 52.1396C131.634 52.1396 126.633 57.1742 126.633 63.7066C126.633 70.239 131.758 75.2735 138.248 75.2735C142.009 75.2735 145.398 73.4427 147.589 70.9047L143.828 67.1184C142.34 68.7411 140.397 69.9893 138.248 69.9893C134.734 69.9893 132.213 67.2432 132.213 63.7066C131.965 60.1699 134.817 57.4238 138.248 57.4238C140.521 57.4238 142.34 58.5888 143.828 60.2947L147.589 56.5084C145.398 53.7207 142.216 52.1396 138.248 52.1396Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M211.861 33C197.188 33 185.242 44.8998 185.242 59.6705C185.242 74.4412 197.188 86.3409 211.861 86.3409V75.2317C203.222 75.2317 196.402 68.1168 196.402 59.6705C196.402 50.9745 203.222 44.1092 211.861 44.1092V33Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M236 54.8857H212.191V65.7453H225.087V78.6853H236V54.8857Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M170.568 61.7507C170.816 55.676 166.93 52.0145 161.805 52.0145C159.077 52.0145 156.803 52.9299 155.191 54.7606V43.4434H149.859V74.6075H155.191V62.6661C155.191 59.4623 157.134 57.3819 160.441 57.3819C163.499 57.3819 165.235 59.3375 165.235 62.6661V74.5658H170.568V61.7507Z" fill="white"/></svg>
            </div>
            <div className="partner-item item-2">
            <svg width="260" height="120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M97.3547 16C91.0837 16 86 21.0837 86 27.3547V92.6441C86 98.9151 91.0837 103.999 97.3547 103.999H162.644C168.915 103.999 173.999 98.9151 173.999 92.6441V27.3547C173.999 21.0837 168.915 16 162.644 16H97.3547ZM97.3547 21.6773H162.644C165.78 21.6773 168.321 24.2192 168.321 27.3547V92.6441C168.321 95.7796 165.78 98.3214 162.644 98.3214H97.3547C94.2192 98.3214 91.6773 95.7796 91.6773 92.6441V27.3547C91.6773 24.2192 94.2192 21.6773 97.3547 21.6773Z" fill="white"/><path d="M125.742 75.6123V81.2897H156.968V75.6123H125.742Z" fill="white"/><path d="M125.742 38.7095V69.2252H132.129V44.3868H138.516V69.2252H144.903V44.3868H149.161C150.337 44.3868 151.29 45.34 151.29 46.5158V69.2252H157.677V45.8062C157.677 41.8868 154.5 38.7095 150.581 38.7095H125.742Z" fill="white"/><path d="M109.421 38.7095C105.502 38.7095 102.324 41.8868 102.324 45.8061V62.1285C102.324 66.0479 105.502 69.2252 109.421 69.2252H115.098V70.6445C115.098 73.3881 112.556 75.6122 109.421 75.6122H105.873V81.2895H109.421C116.084 81.2895 121.485 76.5236 121.485 70.6445V38.7095H109.421ZM110.84 44.3868H115.098V63.5478H110.84C109.664 63.5478 108.711 62.5946 108.711 61.4188V46.5158C108.711 45.34 109.664 44.3868 110.84 44.3868Z" fill="white"/></svg>
            
            </div>
            <div className="partner-item item-3">
                <svg width="260" height="120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M205.675 43.3866H198.351V33.5508H182.268L174.871 43.3866H161.728L157.333 47.602V43.3866H147.079V33.5508H114.851V43.3866H69.5118L62.114 33.5508H46V67.2737L66.5088 86.9453H87.0175V81.3249L92.8772 86.9453H132.43V81.3249L138.289 86.9453H157.333V81.3249L163.193 86.9453H199.816L213 74.2993V50.4122L205.675 43.3866ZM70.9035 57.4378H60.6491V60.2481H70.9035V71.489H54.7895L48.9298 65.8685V36.361H60.6491V46.1969H70.9035V57.4378ZM114.851 71.489H79.693L73.8333 65.8685V46.1969H85.5526V60.2481H88.4825V46.1969H100.202V60.2481H103.132V46.1969H114.851V71.489ZM129.5 71.489H117.781V46.1969H129.5V71.489ZM129.5 43.3866H117.781V36.361H129.5V43.3866ZM154.404 57.4378H144.149V60.2481H154.404V71.489H138.289L132.43 65.8685V36.361H144.149V46.1969H154.404V57.4378ZM180.772 57.4378H169.053V60.2481H180.772V71.489H163.193L157.333 65.8685V51.8173L163.193 46.1969H180.772V57.4378ZM210.07 71.489H198.351V57.4378H195.421V71.489H183.702V36.361H195.421V46.1969H204.211L210.07 51.8173V71.489Z" fill="white"/></svg>
            </div>
          
           
            <div className="partner-item item-4">
                <svg width="260" height="120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2422 54.8931C26.2422 44.6896 31.9716 42.2827 41.5992 42.2827H57.6786C69.8097 42.2827 71.4942 46.6602 71.4942 53.4482V54.5569H60.9975C60.9975 51.0913 59.0234 50.6586 55.6079 50.6586H44.0061C38.6129 50.6586 37.2181 51.9568 37.2181 57.9258V62.2568C37.2181 68.2294 38.6129 69.5276 44.0061 69.5276H55.4148C58.2079 69.5276 60.9975 69.0949 60.9975 65.7259V64.7138H47.7112V57.4931H71.6873V67.4104C71.6873 77.4207 66.4873 77.9035 54.4527 77.9035H41.5992C31.9716 77.9035 26.2422 75.4966 26.2422 65.2932V54.8931Z" fill="white"/><path d="M74.332 42.666H112.456V50.7522H85.0183V56.3386H111.015V63.5593H85.0183V69.142H113.082V77.5179H74.332V42.666Z" fill="white"/><path d="M116.32 42.6655H127.01V77.5174H116.32V42.6655Z" fill="white"/><path d="M130.234 54.8926C130.234 44.6891 135.964 42.2822 145.591 42.2822H158.155C173.366 42.2822 175.343 45.5546 175.243 55.4219H164.557V54.4598C164.557 51.9564 162.729 51.2339 159.55 51.2339H147.902C142.269 51.2339 141.21 53.884 141.21 58.215V61.9702C141.21 67.0237 142.269 68.9514 147.326 68.9514H158.735C163.548 68.9514 164.99 68.4685 164.99 64.1339H175.676V67.4099C175.676 73.2824 173.559 77.903 162.822 77.903H145.591C135.964 77.903 130.234 75.4961 130.234 65.2927V54.8926Z" fill="white"/><path d="M188.531 61.9697C188.531 67.0232 189.589 68.9509 194.646 68.9509H208.315C213.369 68.9509 214.427 67.0232 214.427 61.9697V58.2145C214.427 53.8835 213.369 51.2334 207.739 51.2334H195.222C189.589 51.2334 188.531 53.8835 188.531 58.2145V61.9697ZM177.555 54.8921C177.555 44.6887 183.284 42.2817 192.912 42.2817H210.046C219.677 42.2817 225.407 44.6887 225.407 54.8921V65.2922C225.407 75.4956 219.677 77.9026 210.046 77.9026H192.912C183.284 77.9026 177.555 75.4956 177.555 65.2922V54.8921Z" fill="white"/><path d="M229.471 73.5565C230.011 73.5565 230.851 73.6459 230.851 72.8591C230.851 72.2654 230.325 72.1939 229.85 72.1939H228.748V73.5565H229.471ZM231.277 75.7059H230.719L229.614 73.9284H228.748V75.7059H228.276V71.847H229.96C230.282 71.847 230.608 71.8684 230.897 72.0365C231.184 72.201 231.33 72.5444 231.33 72.8698C231.33 73.628 230.797 73.9105 230.111 73.9284L231.277 75.7059ZM232.586 73.7711C232.586 72.1009 231.23 70.749 229.56 70.749C227.879 70.749 226.527 72.1009 226.527 73.7711C226.527 75.4627 227.879 76.8146 229.56 76.8146C231.23 76.8146 232.586 75.4627 232.586 73.7711ZM226.102 73.7711C226.102 71.8756 227.647 70.3306 229.56 70.3306C231.463 70.3306 233 71.8756 233 73.7711C233 75.6844 231.463 77.233 229.56 77.233C227.647 77.233 226.102 75.6844 226.102 73.7711Z" fill="white"/></svg>
            </div>
            
            <div className="partner-item item-5">
                <p>SEE ALL PARTNERS</p>
            </div>
        </div>
    )
}