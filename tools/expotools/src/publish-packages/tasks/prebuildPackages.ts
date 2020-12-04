import chalk from 'chalk';

import logger from '../../Logger';
import { Task } from '../../TasksRunner';
import { Parcel, TaskArgs } from '../types';

import { canPrebuildPackage, prebuildPackageAsync } from '../../prebuilds/Prebuilder';

/**
 * Updates version props in packages containing Android's native code.
 */
export const prebuildPackages = new Task<TaskArgs>(
  {
    name: 'prebuildPackages',
    required: true,
    backupable: false,
  },
  async (parcels: Parcel[]) => {
    for (const { pkg } of parcels) {
      if (!canPrebuildPackage(pkg)) {
        continue;
      }
      logger.info('\n👷‍♀️ Prebuilding %s', chalk.green(pkg.packageName));
      await prebuildPackageAsync(pkg, { quiet: true });
    }
  }
);
