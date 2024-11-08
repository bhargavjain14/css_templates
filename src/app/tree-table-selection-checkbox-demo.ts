import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@service/nodeservice';
interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-selection-checkbox-demo',
    templateUrl: './tree-table-selection-checkbox-demo.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [NodeService]
})
export class TreeTableSelectionCheckboxDemo implements OnInit {
    files!: TreeNode[];

    selectionKeys = {};

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getTreeTableNodes().then((files) => (this.files = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.selectionKeys = {
            '0-0': {
                partialChecked: false,
                checked: true
            }
        };
    }
}