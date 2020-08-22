export default function GlobalSearch () {
  return <div className="global-search">
    <input type="text" placeholder="What you are looking for ..." className="global-search__input" />
    <button className="global-search__btn">
      <img src="/search.png" />
    </button>
  </div> 
}