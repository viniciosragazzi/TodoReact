 arr.map((item, key) => (
        <li key={key} className="flex">
          <label
            className="circle"
            htmlFor={item}
            onClick={() => algo(item)}
          ></label>
          <input type="checkbox" name={item} id={item} />
          <label htmlFor={item}>{item}</label>
        </li>
      ))


      arrI[1].map((i, key) => {
              <li
                className="flex"
                onClick={(e) => {
                  del(e);
                }}
              >
                <label className="circle" htmlFor="banana"></label>
                <input type="checkbox" name="banana" id="banana" />
                <label htmlFor="banana">{n}</label>
              </li>;
            })