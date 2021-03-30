<div class="container"> 
    <h1>Js-in-work</h1>    
    <p>Js-in-work is a pure JavaScript language project.</p>
    <ul>
    <li>The JavaScript language</li>
    <li>Browser: Document, Events, Interfaces</li>    
    </ul>
    <h4><a href="https://js-in-work-4eebb.web.app/" rel="nofollow">Demo version</a></h4>
    <h2>List of JS code blocks</h2>
    <ul>
    <li>Tabs</li>
    <li>Timer</li>
    <li>Modal</li>
    <li>Cards - use classes or function</li>
    <li>Slider</li>
    <li>Menu & scroll to #</li>
    </ul>
    <h2>Examples</h2>
    <p>Sample code for implementing a timer:</p>    
    <pre>
        const deadline = new Date(new Date(). getTime() + (48 * 60 * 60 * 1000)),  
              action = document.querySelector('#action');
              action.innerHTML = ' in 2 days';
              <br />        
            function getTimeRemaining(endtime) {
                const t = Date.parse(endtime) - Date.parse(new Date()),
                      days = Math.floor(t / (1000 * 60 * 60 * 24)),
                      hours = Math.floor(t / (1000 * 60 * 60) % 24),
                      minutes = Math.floor((t / 1000 / 60) % 60),
                      seconds = Math.floor((t / 1000) % 60);       
                return {
                    'total': t,
                    days,
                    hours,
                    minutes,
                    seconds
                };
            }
            <br />         
            function getZero(num) {
                if (num >= 0 && num < 10) {
                    return `0${num}`;
                } else {
                    return num;
                }
            }
            <br />        
            function setClock(selector, endtime) {
                const timer = document.querySelector(selector),
                      days = timer.querySelector('#days'),
                      hours = timer.querySelector('#hours'),
                      minutes = timer.querySelector('#minutes'),
                      seconds = timer.querySelector('#seconds'),
                      timeInterval = setInterval(updateClock, 1000);
                      <br />         
                updateClock();
                <br />        
                function updateClock() {
                    const t = getTimeRemaining(endtime);        
                    days.innerHTML = getZero(t.days);
                    hours.innerHTML = getZero(t.hours);
                    minutes.innerHTML = getZero(t.minutes);
                    seconds.innerHTML = getZero(t.seconds);
                    <br />       
                    if (t.total <= 0) {
                        clearInterval(timeInterval);
                    }
                }
            }
            <br />         
            setClock('.timer', deadline);  
    </pre>        
    <h2>Installation</h2>
    <p>Clone</p>
    <pre>git clone https://github.com/fvo69kiev/js-in-work.git</pre>
    <p>If you'd like to use npm, it's as easy as:</p>
    <pre>npm install</pre>
    <p>Open project (use 2 terminals)</p>
    <pre>json-server db.json</pre>
    <p>and</p>
    <pre>npx live-server . --port=3001</pre>
    <p>If you have local servers installed on your computer, such as MAMP or Open Server, you can use them instead of the live-server</p>
</div>