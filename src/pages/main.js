function Main() {
  return (
    <div style={{ width: '80%', margin: '3% 10%' }}>
      <u><i><h1>Problem Statements</h1></i></u>
      <ol>
        <li>
          Problem 1 - <i>API rate-limiting</i> <b> (Solved!)</b>
          <p>I have solved this problem using packages like request-ip & node-cache. IP address of all the requests are cached with the timestamp to recognise the consecutive hits.</p>
          <p>
            <ul>
              <li>
                Visit the <a href="https://melon-flint-gatsby.glitch.me/">link</a> and try refreshing the page several times. <br /><i>Please note - I have increased the hit limit in order to incorporate the APIs properly with solutions to other problems.</i>
              </li>
              <br/>
              <li>
                Here is the <a href="https://glitch.com/edit/#!/melon-flint-gatsby">code</a> on Glitch. I have added comments alongside the changes I have made in the pre-existing code.
              </li>
            </ul>
          </p>
        </li>
        <li>
          Problem 2 - <i>Client-side general chart visualizations</i> <b> (Solved!)</b>
          <p>I have solved this problem using Highcharts package. </p>
          <p>
            <ul>
              <li>
                Visit the <a href="/problemTwo">link</a>.
              </li>
              <br/>
              <li>
                Here is the <a href="https://github.com/alankritgupta091099/eqworks/blob/master/src/pages/problemTwo.js">code</a> on Github.
              </li>
            </ul>
          </p>
        </li>
        <li>
          Problem 3 - <i>Client-side data table</i> <b> (Solved!)</b>
          <p>I have used Ag-Datagrid for rendering tables </p>
          <p>
            <ul>
              <li>
                Visit the <a href="/problemThree">link</a>.
              </li>
              <br/>
              <li>
                Here is the <a href="https://github.com/alankritgupta091099/eqworks/blob/master/src/pages/problemThree.js">code</a> on Github.
              </li>
            </ul>
          </p>
        </li>
      </ol>
      <p>Project Source Code: <a href="https://github.com/alankritgupta091099/eqworks"> https://github.com/alankritgupta091099/eqworks </a></p>
      <p><i><b>Note:</b> I have kept a very basic UI in order to focus more on the functionality. Here are a few work samples to demonstrate my proficiency in UI implementation.
      <ul>
        <li><a href="https://bit.ly/get-measurements-doc">https://bit.ly/get-measurements-doc</a></li>
        <li><a href="https://bit.ly/ecommerce-app-screenshots">https://bit.ly/ecommerce-app-screenshots</a></li>
      </ul>
      </i></p>
    </div>
  );
}

export default Main;