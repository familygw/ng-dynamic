import { Type } from "@angular/core";
import { Observable, Subject } from "rxjs";

export abstract class ModulesProvider {
  private constructor() { }

  static getComponent(index: number): Subject<Type<any>> {
    const subject: Subject<Type<any>> = new Subject<Type<any>>();

    switch (index) {
      case 1:
        import("../modules/module-a/module-a.module").then(() =>
          import("../modules/module-a/module-a.component").then(({ ModuleAComponent }) => subject.next(ModuleAComponent))
        );
        break;
      case 2:
        import("../modules/module-b/module-b.module").then(() =>
          import("../modules/module-b/module-b.component").then(({ ModuleBComponent }) => subject.next(ModuleBComponent))
        );
        break;
      default:
        import("../modules/module-c/module-c.module").then(() =>
          import("../modules/module-c/module-c.component").then(({ ModuleCComponent }) => subject.next(ModuleCComponent))
        );
        break;
    }

    return subject;
  }
}