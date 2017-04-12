function Trie(){

	function TrieNode(){
		this.children = new Map();
		this.endOfWord = false;
	}

	var root = new TrieNode();

	this.insert = function(word){
		var current = root;
		for(var i = 0; i < word.length; i++){
			var ch = word.charAt(i);
			var node = current.children.get(ch);
			if(node == null){
				node = new TrieNode();
				current.children.set(ch, node);
			}
			current = node;
		}
		//mark the current nodes endOfWord as true
		current.endOfWord = true;
	}

	this.search = function(word){
		current = root;
		for(var i = 0; i < word.length; i++){
			var ch = word.charAt(i);
			var node = current.children.get(ch);
			if(node == null){
				return false;
			}
			current = node;
		}

		return current.endOfWord;
	}

}