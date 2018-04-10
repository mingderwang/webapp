import React from 'react'
import Link from 'next/link'

export default () =>
    <footer>
      <div id="credits">
        <div className="container text-center">
              <li>&copy; 2018 <Link prefetch href='/about'><a>BiMAP 集先鋒有限公司</a></Link></li>
        </div>
      </div>
    </footer>
