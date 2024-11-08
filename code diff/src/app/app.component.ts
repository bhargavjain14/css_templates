import { Component, OnInit, VERSION } from '@angular/core';
import * as diff from 'diff';
import * as Diff2html from 'diff2html';
import gitDiffParser from 'gitdiff-parser';

declare var Diff2HtmlUI: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  outputHtml;

  oldText = `class FibonacciExample2{  
    static int n1=0,n2=1,n3=0;    
    static void printFibonacci(int count){    
       if(count>0){    
            n3 = n1 + n2;    
            n1 = n2;    
            n2 = n3;    
            System.out.print(" "+n3);   
            printFibonacci(count-1);    
        }    
    }    
    public static void main(String args[]){    
     int count=10;    
     System.out.print(n1+" "+n2);//printing 0 and 1    
     printFibonacci(count-2);//n-2 because 2 numbers are already printed   
    }  
   }  `;
  newText = `class FibonacciExample2{  
    static int n1=0,n2=1,n3=0;  
    
    
    static void printFibonacci(int count){    
       if(count>0){    
            n3 = n1 + n2;    
            n1 = n2;    
            n2 = n3;    
            System.out.print(" "+n3);   
            printFibonacci(count-1);    
        }    
    }    
    public static void main(String args[]){    
     int count=10;    
     System.out.print(n1+" "+n2);//printing 0 and 1    
     printFibonacci(count-2);//n-2 because 2 numbers are already printed   
    }  
   }  `;

  first = `Hello`;
  second = `Hello`;

  ngOnInit() {
    const targetElement = document.getElementById('test');
    const configuration = {
      drawFileList: true,
      matching: 'lines',
    };

    const diffText = diff.createTwoFilesPatch(
      'file',
      'file',
      this.oldText,
      this.newText
    );

    console.log(diffText);

    // const diff2htmlUi = new Diff2HtmlUI(targetElement, diffText, configuration);
    // diff2htmlUi.draw();
    // diff2htmlUi.highlightCode();

    let outputHtml = Diff2html.html(diffText, {
      drawFileList: false,
      matching: 'words',
      outputFormat: 'side-by-side',
    });

    this.outputHtml = outputHtml;
  }
}
