class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-' ]/g, '')
  }

  static titleize(string){
    const except = new Set(["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]);
        return string
            .split(" ")
            .map((word, index) => 
                (index === 0 || !except.has(word.toLowerCase())) 
                    ? word[0].toUpperCase() + word.slice(1) 
                    : word
            )
            .join(" ")

  }
}