module.exports = function solveSudoku(matrix) {
  // your solution
class Solve{
			constructor(matrix){
				this.matrix = matrix
			}
			vertkand(){
				let arr = [];
				let index = [];
        
				for(let i = 0; i < 9; i++){
        	let bad = [];

					for(let l = 0; l < 9; l++){
          	if( this.matrix[l][i] === 0 || isNaN(this.matrix[l][i]) === true ){
               }else{
                bad.push(this.matrix[l][i])
               }
            } 
					

					
          bad = bad.sort(function(a,b){return a-b});
					arr.push(bad);
          }
				
          return arr   
      
			}
			
      horkand(vbad){
				
				for( let i = 0; i < 9; i++){
					let arrK = [];
					let index = [];
					const cand = [1,2,3,4,5,6,7,8,9];
					
					for( let k = 0; k < 9; k++){
						
						switch(cand[k]){
							case this.matrix[i][0] :
								break
							case this.matrix[i][1] :
								break
							case this.matrix[i][2] :
								break
							case this.matrix[i][3] :
								break
							case this.matrix[i][4] :
								break
							case this.matrix[i][5] :
								break
							case this.matrix[i][6] :
								break
							case this.matrix[i][7] :
								break
							case this.matrix[i][8] :
								break
							default:
							arrK.push(cand[k])														
						}

						if(isNaN(this.matrix[i][k]) === true){
							index.push([i,k])
						}else if(this.matrix[i][k] === 0){
							index.push([i,k])  
						}
						
					}


						let indexlength = index.length;
						for(let l = 0; l < indexlength; l++){
							
							let dot_1 = index[l][0];
							let dot_2 = index[l][1];

							if(arrK.length == 1){
								this.matrix[dot_1][dot_2] = arrK[0];
								
								break
							}else{

								if(vbad[dot_2].length == 0){
									this.matrix[dot_1][dot_2] = arrK.slice(0)
								}

								let ktr = arrK.slice(0);
								for(let n = 0 ; n < vbad[dot_2].length; n++){
									let tempk = ktr.slice(0)
									let kandl = tempk.length;

										for(let m = 0; m < kandl; m++){
										if(vbad[dot_2][n] == tempk[m]){
											tempk.splice(m,1)
											m = m - 1;
										}
										
									} 
									ktr = tempk.slice(0)
								} 
									if(ktr == undefined){
										this.matrix[dot_1][dot_2] = 0	
									}	else{
										this.matrix[dot_1][dot_2] = ktr.slice(0);
									}
								
							}
						}
					
				}
				
			return 1
			}
  
			check(){
        let numberv = 0;
				let numberh = 0;
				let sudoky = this.matrix;
				shooseSector(numberh, numberv, sudoky);
				
				function shooseSector(numberh, numberv,sudoky){
					let index = [];
					let bad = [];
					let square = [];
					let indexsquare = [];
					for(let i = numberh; i < numberh + 3 && i < 9; i++){
						for(let k = numberv; k < numberv + 3 && k < 9; k++){
							if(sudoky[k][i].length == 1){
								sudoky[k][i] = sudoky[k][i][0];
								 return sudoky
							}else if(isNaN(sudoky[k][i]) == true){
								index.push([k,i]);
							} else {
								bad.push(sudoky[k][i]);
							}
							
						}
					} 
					bad = bad.sort(function (a,b){return a-b});

					let indexlength = index.length;
						for(let l = 0; l < indexlength; l++){
							
							let dot_1 = index[l][0];
							let dot_2 = index[l][1];
							let arrK = sudoky[dot_1][dot_2];

							if(arrK.length == 1){
								sudoky[dot_1][dot_2] = arrK[0];
								check = 1;
								break
								break
							}else{
								
								let ktr = arrK.slice(0);
								for(let n = 0 ; n < bad.length; n++){
									let tempk = ktr.slice(0)
									let kandl = tempk.length;
									
										for(let m = 0; m < kandl; m++){
										if(bad[n] == tempk[m]){
											tempk.splice(m,1)
											m = m - 1;
											break
										}
										
									} 
									ktr = tempk.slice(0)
								} 
									if(ktr == undefined){
										sudoky[dot_1][dot_2] = 0	
									}	else if(ktr.length == 1){
										sudoky[dot_1][dot_2] = ktr[0];
										
										break
										break
									}else{
										sudoky[dot_1][dot_2] = ktr.slice(0);
									}
							}
							
							
						}
					
					if(numberv < 9){
						
						if(numberh >= 9){
							if(numberv < 9){
								numberv +=3
							}
              numberh = 0;
								shooseSector(numberh, numberv, sudoky);
						}else {
							numberh +=3
							shooseSector(numberh, numberv, sudoky);
							}

					}
					return sudoky
				} 
				let check = 1;
				return check
			}	
      
      getWin(){

				let check;
				for(let i = 0; i < 9; i++ )
					for(let k = 0; k < 9; k++){
							if(isNaN(this.matrix[i][k]) == true || this.matrix[k] == 0){
								check = 1
                return check
							}
							else{
						
							check == 3
						
						}
					}
                
				return check
			}
			
			search(){
				for(let m = 0; m < 9; m++){
					let tempTwins = search(this.matrix[m])
						this.matrix[m] = tempTwins;
						function search(arr){
							let twinsCandidate = [];
							
							let twins = [];
							for(let i = 0; i < 9; i++){
								if(arr[i].length == 2){
									twinsCandidate.push(arr[i]);
								}else if(arr[i].length == 1){
									arr[i]= arr[i][0];
								}
								
							} 
							if(twinsCandidate.length > 1){
									twinsCandidate.sort();
									twinsCandidate.forEach(function(current, index, twinsCandidate){
										if(index !== twinsCandidate.length -1){
												if(current[0] == twinsCandidate[index + 1][0] && current[1]== twinsCandidate[index + 1][1]){
												twins.push(current)
											}
										}
										
									})
								if(twins.length > 0){
								for( let i = 0; i < 9; i++){
									if(isNaN(arr[i]) == false || arr[i].length ==2){
										if(arr[i][0] == twins[0][0] && arr[i][1] == twins[0][1]){
											
										}else{
										for(let k = 0; k < arr[i].length; k++){
											if(arr[i][k] == twins[0][0] || arr[i][k] == twins[0][1]){
												arr[i].splice(k,1);
												k = k - 1;
												if(arr[i].length == 1){
													arr[i] = arr[i][0]
												}
											}
										} 
										}
									}	else{
										for(let k = 0; k < arr[i].length; k++){
											if(arr[i][k] == twins[0][0] || arr[i][k] == twins[0][1]){
												arr[i].splice(k,1);
												k = k - 1;
												if(arr[i].length == 1){
													arr[i] = arr[i][0]
												}
											}
										}
									}
								} 
									
								}
								
							}
							
							return arr
						}
				}
			}
			checksquare(){
				let numberh = 0;
				let numberv = 0;
				let sudoky = this.matrix;
				shooseSector(numberh, numberv, sudoky);
				
				function shooseSector(numberh, numberv,sudoky){
         
					let index = [];
					let bad = [];
					let square = [];
					let indexsquare = [];
          
					for(let i = numberh; i < numberh + 3 && i < 9; i++){
            
						for(let k = numberv; k < numberv + 3 && k < 9; k++){
							if(sudoky[k][i].length == 1){
								sudoky[k][i] = sudoky[k][i][0];
								 return sudoky
								 
								 }
							else if(isNaN(sudoky[k][i]) == true){
								index.push([k,i]);
							} else {
								bad.push(sudoky[k][i]);
							}
							
						} 
					} 
					bad = bad.sort(function (a,b){return a-b});
					
					let readyk = getk(sudoky,bad)
					function getk(sudoky,bad){
						let nadlenght = bad.length;
						let sect = [1,2,3,4,5,6,7,8,9];
						for(let z = 0; z < nadlenght; z++){
							for(let x = 0; x < sect.length; x++){
								if(bad[z] == sect[x]){
									sect.splice(x,1)
									x= x-1
								}
							}
						}
						return sect
					}
									

					let readyklen = readyk.length;
					let winner = [];
					let winnerIndex = [];
					let indexlength = index.length;

					for(let z = 0; z < readyklen; z++){

						for(let f = 0; f < indexlength; f++){

							let cell =sudoky[index[f][0]][index[f][1]]
							let cellL = cell.length;

							for(let d = 0; d < cellL; d++){

								if(winner.length == 0 && readyk[z] == cell[d]){
									winner.push(readyk[z])
									winnerIndex.push([index[f]])
									break
									
								}else if(winner[winner.length - 1] == cell[d] && readyk[z] == cell[d] ){
									winner.pop()
									winnerIndex.pop()
									f = indexlength; 
									break
								}else if(readyk[z] == cell[d]){
									winner.push(readyk[z])
									winnerIndex.push([index[f]])
								}
								else if(winner[winner.length - 1] !== cell[d]){


								}
							}
						}
					}

					for(let p = 0; p < winner.length; p++){
						for(let o = 0; o < winnerIndex.length; o++){
							sudoky[winnerIndex[o][0][0]][winnerIndex[o][0][1]] = winner[p];
							 p = p + 1
						}
					} 
					
					if(numberv < 9){
						
						if(numberh >= 9){
							if(numberv < 9){
								numberv +=3
							}
              numberh = 0;
								shooseSector(numberh, numberv, sudoky);
						}else {
							numberh +=3
              if(numberh == 9){
                return sudoky
              }
							shooseSector(numberh, numberv, sudoky);
							}
						
						
						
						
					}
					return sudoky
				} 
				let check = 1;
				return check
			}
			
			deletek(){
        let sudoky = this.matrix
        del(sudoky)
        function del(sudoky){
          for(let i = 0; i < 9; i++){
					let arrayNotCandidate = [];
					let index = [];
					
					for(let k = 0; k < 9; k++){
						if(sudoky[i][k].length == 1){
              sudoky[i][k] = sudoky[i][k][0]
              del(sudoky)
            }
						else if(isNaN(sudoky[i][k]) === false && sudoky[i][k].length ==  undefined){
							arrayNotCandidate.push(sudoky[i][k])
						}else{
							index.push([i,k])  
						}

					}
					arrayNotCandidate = arrayNotCandidate.sort(function(a,b){return a-b})
		
						let indexlength = index.length;
						for(let l = 0; l < indexlength; l++){
							
							let dot_1 = index[l][0];
							let dot_2 = index[l][1];
							
					     if(isNaN(sudoky[dot_1][dot_2]) == false){
                 break
               }

								let ktr = sudoky[dot_1][dot_2].slice(0);
								for(let n = 0 ; n < arrayNotCandidate.length; n++){
									let tempk = ktr.slice(0)
									let kandl = tempk.length;

										for(let m = 0; m < kandl; m++){
										if(arrayNotCandidate[n] == tempk[m]){
											tempk.splice(m,1)
											m = m - 1;
										}
										
									} 
									ktr = tempk.slice(0)
								} 
									if(ktr == undefined){
										sudoky[dot_1][dot_2] = 0	
									}else{
										sudoky[dot_1][dot_2] = ktr.slice(0);
									}
							
						}
					}
        }
				
				return 2
				}      
      
        checkstr(){
        let sudoky = this.matrix;
        let check;

        for(let i = 0; i<9; i++){
          let index = [];
          let indexCandL = index.length;
          let bad = [];
          let str = this.matrix[i]
          for(let k = 0; k < 9; k++){
            
            if(str[k].length == 1){
              str[k] = str[k][0]
              check = 2;
              return sudoky
            }else if(isNaN(str[k])== false){
              bad.push(str[k]);
            }else {
              index.push([k])
          }
        }
        bad.sort(function(a,b){return a-b});
          let readyk = getk(sudoky,bad);
					function getk(sudoky,bad){
						let nadlenght = bad.length;
						let sect = [1,2,3,4,5,6,7,8,9];
						for(let z = 0; z < nadlenght; z++){
							for(let x = 0; x < sect.length; x++){
								if(bad[z] == sect[x]){
									sect.splice(x,1)
									x= x-1
								}
							}
						}
						return sect
					}
          let readyklen = readyk.length;
					let winner = [];
					let winnerIndex = [];
					let indexlength = index.length;

					for(let z = 0; z < readyklen; z++){

						for(let f = 0; f < indexlength; f++){
              let cell =str[index[f]];
              let cellL = cell.length;
              for(let d = 0; d < cellL; d++){
                if(winner.length == 0 && readyk[z] == cell[d]){
									winner.push(readyk[z])
									winnerIndex.push([index[f]])
									break
									
								}else if(winner[winner.length - 1] == cell[d] && readyk[z] == cell[d] ){
									winner.pop()
									winnerIndex.pop()
									f = indexlength;

									break
								}else if(readyk[z] == cell[d]){
									winner.push(readyk[z])
									winnerIndex.push([index[f]])
								}else if(winner[winner.length - 1] !== cell[d]){


								}
              }
            }
            
          }
					for(let p = 0; p < winner.length; p++){
						for(let o = 0; o < winnerIndex.length; o++){
							str[winnerIndex[o]] =  winner[p];
							p = p+1
						}
					}  
        
        
          check = 1 
      }
        return check
		}
      
      deletev(vbad){
        
        for(let i = 0; i < 9; i++){
          
          for(let k =0; k < 9; k++){
            
            let cell = this.matrix[i][k]
            let cellL = cell.length
             
            for(let z = 0; z < cellL; z++){
              
              for(let l = 0; l < vbad[k].length; l++){
                if( cell[z] ==vbad[k][l]){
                  cell.splice(z,1)
                  z = z-1
                }
              }
            }
          }
        }
      }
      shoosev(vbad){
        let sudoky = this.matrix;
        for(let i =0; i<9; i++){
         
            let readyk = getk(sudoky,vbad[i]);
            let readyklen = readyk.length;
            let winner = [];
            let winnerIndex = [];
            for(let k = 0; k < readyklen; k++){

              for(let z = 0; z < 9; z++){
                let cell = this.matrix[z][i];
                let cellL = cell.length;
                for(let f = 0; f < cellL; f++){
                  if( winner.length == 0 && readyk[k] == cell[f]){
                    winner.push(readyk[k]);
                    winnerIndex.push([z,i]);
                    break
                  }else if(winner[winner.length - 1] == cell[f] && readyk[k] == cell[f]){
                    winner.pop()
                    winnerIndex.pop()
                    z = 9
                    break
                  }else if(readyk[k] == cell[f]){
                    winner.push(readyk[k])
									  winnerIndex.push([z,i]);
                  }else if(winner[winner.length - 1] !== cell[f]){
                    
                  }
                }
              }
              
            }
					for(let p = 0; p < winner.length; p++){
						for(let o = 0; o < winnerIndex.length; o++){
							this.matrix[winnerIndex[o][0]][winnerIndex[o][1]] =  winner[p];
              p = p + 1
							
						}
					}
        }
        function getk(sudoky,bad){
						let nadlenght = bad.length;
						let sect = [1,2,3,4,5,6,7,8,9];
						for(let z = 0; z < nadlenght; z++){
							for(let x = 0; x < sect.length; x++){
								if(bad[z] == sect[x]){
									sect.splice(x,1)
									x= x-1
								}
							} 
						} 
						return sect
					}
      }
      
  } 
 

    let newSundoky = new Solve(matrix)
		let vbad = newSundoky.vertkand();		
		let exit = 0
		control(newSundoky.horkand(vbad)); 
    function control(action){
      let controlCheck = action;
			
      if(controlCheck = 1){
        action = undefined;
        newSundoky.deletek()
        newSundoky.check()
        newSundoky.deletek()
        newSundoky.checksquare()
        newSundoky.deletek()
        newSundoky.search()
        newSundoky.deletek()
        newSundoky.checkstr()
        newSundoky.deletek()
        vbad = newSundoky.vertkand();
        newSundoky.deletev(vbad)
        newSundoky.shoosev(vbad)
        exit = exit + 1;
          if( exit == 5){
            return matrix
          }
        if(newSundoky.getWin() == 1){
          
          control(1)
        }else{
          console.log(matrix)
          return matrix
        };
       
      }else if(controlCheck == 2){
        action = undefined;
        newSundoky.deletek();
        newSudoky.checkstr()
      }else if(controlCheck == 0){
        debugger
        return matrix
      }
      
			
    }
  return matrix
}